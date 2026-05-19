import { motion } from "framer-motion";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/build/pdf.mjs";
import pdfWorkerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import { useEffect, useMemo, useState } from "react";

GlobalWorkerOptions.workerSrc = pdfWorkerSrc;

const PDF_URL = `${import.meta.env.BASE_URL}Jordan_CV.pdf`;
const PAGE_LIMIT = 2;

const sanitizeText = (text) =>
  text
    .replace(/\s+/g, " ")
    .replace(/\s+-\s+/g, " - ")
    .trim();

const extractHighlights = (text) => {
  const lines = text
    .split(/\n+/)
    .map((line) => sanitizeText(line))
    .filter((line) => line.length > 20)
    .filter((line) => !/^page\s+\d+/i.test(line));

  return lines.slice(0, 6);
};

const CVModal = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageImages, setPageImages] = useState([]);
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    const handler = () => setOpen(true);
    const closeHandler = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("openCV", handler);
    window.addEventListener("keydown", closeHandler);

    return () => {
      window.removeEventListener("openCV", handler);
      window.removeEventListener("keydown", closeHandler);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    const loadPdf = async () => {
      if (!open) return;

      setLoading(true);
      setPageImages([]);
      setHighlights([]);

      try {
        const pdf = await getDocument(PDF_URL).promise;
        const pageCount = Math.min(pdf.numPages, PAGE_LIMIT);
        const images = [];
        let mergedText = "";

        for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
          const page = await pdf.getPage(pageNumber);
          const viewport = page.getViewport({ scale: 1.6 });
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({ canvasContext: context, viewport }).promise;
          images.push(canvas.toDataURL("image/png"));

          const textContent = await page.getTextContent();
          mergedText += textContent.items.map((item) => item.str).join("\n") + "\n";
        }

        if (!cancelled) {
          setPageImages(images);
          setHighlights(extractHighlights(mergedText));
        }
      } catch (error) {
        if (!cancelled) {
          setHighlights([
            "Preview could not be generated in-browser.",
            "Use the download button to open the full PDF.",
          ]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadPdf();

    return () => {
      cancelled = true;
    };
  }, [open]);

  const stats = useMemo(
    () => [
      { label: "Format", value: "Interactive preview" },
      { label: "Pages shown", value: `${PAGE_LIMIT}` },
      { label: "Action", value: "Download only from button" },
    ],
    [],
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={() => setOpen(false)}
      />

      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="relative z-50 w-full max-w-[1180px] max-h-[92vh] overflow-hidden rounded-[28px] border border-white/10 bg-[#090909] shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
      >
        <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">Curriculum Vitae</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Jordan Chua</h2>
            <p className="mt-1 text-sm text-white/60">
              Clean preview below, download stays separate so viewers can inspect before saving.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href={PDF_URL}
              download
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white hover:text-black"
            >
              Download PDF
            </a>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75 transition hover:bg-white/10 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>

        <div className="grid max-h-[calc(92vh-88px)] gap-6 overflow-y-auto p-5 lg:grid-cols-[1.3fr_0.7fr]">
          <section className="space-y-4">
            {loading && (
              <div className="flex min-h-[60vh] items-center justify-center rounded-[24px] border border-white/10 bg-white/5">
                <div className="flex flex-col items-center gap-4 text-white/70">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/15 border-t-white" />
                  <p>Generating preview...</p>
                </div>
              </div>
            )}

            {!loading && pageImages.length > 0 && (
              <div className="space-y-6">
                {pageImages.map((src, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
                  >
                    <div className="mb-3 flex items-center justify-between px-1 text-xs uppercase tracking-[0.3em] text-white/45">
                      <span>Preview Page {index + 1}</span>
                      <span>Rendered with PDF.js</span>
                    </div>
                    <img
                      src={src}
                      alt={`CV preview page ${index + 1}`}
                      className="w-full rounded-[18px] bg-white"
                    />
                  </div>
                ))}
              </div>
            )}
          </section>

          <aside className="space-y-4">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">Preview summary</p>
              <div className="mt-4 grid gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
                  >
                    <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">{stat.label}</p>
                    <p className="mt-1 text-sm text-white/80">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/45">Parsed highlights</p>
              <div className="mt-4 space-y-3">
                {highlights.length > 0 ? (
                  highlights.map((line, index) => (
                    <div key={index} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/75 leading-relaxed">
                      {line}
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/55">
                    The preview is being prepared. Download remains separate if you want the full file.
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </motion.div>
    </div>
  );
};

export default CVModal;