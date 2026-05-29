import Link from "next/link";

function getYouTubeId(url: string): string | null {
  const watch = url.match(/[?&]v=([^&]+)/);
  if (watch?.[1]) return watch[1];
  const short = url.match(/youtu\.be\/([^?&/]+)/);
  if (short?.[1]) return short[1];
  const embed = url.match(/youtube\.com\/embed\/([^?&/]+)/);
  if (embed?.[1]) return embed[1];
  return null;
}

export function YouTubeEmbed({
  url,
  title,
  channel,
}: {
  url: string;
  title?: string;
  channel?: string;
}) {
  const id = getYouTubeId(url);
  if (!id) {
    return (
      <div className="card p-4">
        <div className="text-sm font-semibold text-foreground">Invalid YouTube link</div>
        <div className="mt-1 break-words text-sm text-muted">{url}</div>
      </div>
    );
  }

  const src = `https://www.youtube.com/embed/${id}`;

  return (
    <div className="card overflow-hidden transition hover:border-[var(--border-strong)]">
      <div className="aspect-video bg-zinc-100">
        <iframe
          className="h-full w-full"
          src={src}
          title={title || "YouTube video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
        <div className="min-w-0">
          {title && (
            <div className="truncate text-[13px] font-medium text-foreground" title={title}>
              {title}
            </div>
          )}
          {channel && (
            <div className="mt-0.5 font-[family-name:var(--font-geist-mono)] text-[11px] text-[var(--faint)]">
              {channel} · Hindi
            </div>
          )}
        </div>
        <Link
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label="Open on YouTube"
          className="inline-flex shrink-0 items-center gap-1 rounded-md border border-border px-2 py-1 text-[11px] font-medium text-muted transition hover:border-[var(--border-strong)] hover:text-foreground"
        >
          <svg className="h-3.5 w-3.5 text-[#ef4444]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
            <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#fff" />
          </svg>
          Open
        </Link>
      </div>
    </div>
  );
}
