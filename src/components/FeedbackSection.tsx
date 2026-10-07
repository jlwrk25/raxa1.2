import React, { useState } from 'react';
import { RaxaLogo } from '../assets/logo';
import { CommentItem } from '../types';

const INITIAL_COMMENTS: CommentItem[] = [
  {
    id: 'c1',
    name: 'ma***',
    comment: 'The cloud workspace is so easy to follow. Found my modules in seconds.',
    rating: 5,
    reply: 'Thank you, Maria! More modules are on the way.',
    date: 'Sep 28, 2026',
    color: '#2f72bf',
  },
  {
    id: 'c2',
    name: 'ju***',
    comment: 'Inventory screen is great, but I would love a dark mode toggle in every module.',
    rating: 4,
    reply: 'Noted. Dark mode for modules is on our list.',
    date: 'Sep 30, 2026',
    color: '#5a8700',
  },
  {
    id: 'c3',
    name: 'ca***',
    comment: 'Sign in popup felt a bit slow on my phone.',
    rating: 3,
    reply: 'Thanks for flagging it. We are looking at load time.',
    date: 'Oct 01, 2026',
    color: '#12263a',
  },
  {
    id: 'c4',
    name: 'pa***',
    comment: 'Love the pandas. Please add more report filters.',
    rating: 5,
    date: 'Oct 03, 2026',
    color: '#e0612f',
  },
  {
    id: 'c5',
    name: 'al***',
    comment: 'Trial countdown is helpful. Wish the pricing page explained the plans more.',
    rating: 4,
    date: 'Oct 05, 2026',
    color: '#7d5fc0',
  },
];

export const FeedbackSection: React.FC = () => {
  const [comments, setComments] = useState<CommentItem[]>(INITIAL_COMMENTS);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [expandedReplies, setExpandedReplies] = useState<Record<string, boolean>>({});

  // Form State
  const [email, setEmail] = useState('');
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(5);
  const [statusMsg, setStatusMsg] = useState<{ text: string; ok: boolean } | null>(null);

  const avgRating = (
    comments.reduce((sum, c) => sum + c.rating, 0) / (comments.length || 1)
  ).toFixed(1);

  const toggleReply = (id: string) => {
    setExpandedReplies((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !commentText) {
      setStatusMsg({ text: 'Please fill in both email and comment.', ok: false });
      return;
    }

    const masked = email.split('@')[0].slice(0, 2) + '***';
    const newComment: CommentItem = {
      id: 'c_' + Date.now(),
      name: masked,
      comment: commentText.trim(),
      rating,
      date: 'Just now',
      color: '#0f8b8d',
    };

    setComments([newComment, ...comments]);
    setStatusMsg({ text: 'Thank you! Your comment was received.', ok: true });

    setTimeout(() => {
      setEmail('');
      setCommentText('');
      setRating(5);
      setStatusMsg(null);
      setIsDialogOpen(false);
    }, 1200);
  };

  return (
    <section className="bg-[var(--sec)] py-14 md:py-24 px-4 sm:px-8 lg:px-16 border-t border-[var(--rx-chart-grid)]" id="feedback">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-center text-[var(--ink)] mb-2">
          Comments
        </h2>
        <p className="text-[var(--sub)] text-center text-sm sm:text-base max-w-xl mx-auto mb-12">
          Tell us what works and what doesn&rsquo;t. Every comment is read by the pandas.
        </p>

        <div className="flex flex-col items-center gap-10 md:gap-14 max-w-4xl mx-auto">
          {/* Brand Logo & Subtitle */}
          <div className="flex flex-col items-center text-center gap-2">
            <RaxaLogo variant="navy" className="w-56 sm:w-72 h-auto" />
            <p className="font-extrabold text-base sm:text-lg text-[var(--ink)] m-0">
              This greatly helps us improve stuff
            </p>
          </div>

          {/* Reviews List & Summary */}
          <div className="w-full">
            {/* Summary Card */}
            <div className="bg-[var(--bg)] border border-[color-mix(in_srgb,var(--rx-blue)_30%,transparent)] rounded-2xl p-6 text-center mb-6 shadow-sm flex flex-col items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--ink)] m-0">
                What people say
              </h3>
              <div className="flex items-center gap-2 font-extrabold text-2xl text-[var(--ink)]">
                <span>{avgRating}</span>
                <div className="flex items-center text-[var(--rx-lime)]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className={s <= Math.round(Number(avgRating)) ? 'text-[var(--rx-lime)]' : 'text-slate-300'}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[var(--sub)] m-0">
                Read our {comments.length} comments
              </p>
              <button
                type="button"
                onClick={() => setIsDialogOpen(true)}
                className="mt-2 px-6 py-2 bg-[#12263a] text-[#eef1f7] text-sm font-extrabold rounded-full border-2 border-[var(--rx-lime)] hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors cursor-pointer"
              >
                Write a comment
              </button>
            </div>

            {/* Masonry Review Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {comments.map((c) => (
                <div
                  key={c.id}
                  className="bg-[var(--bg)] border border-[color-mix(in_srgb,var(--rx-blue)_30%,transparent)] rounded-2xl p-4 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-9 h-9 rounded-full text-white font-extrabold flex items-center justify-center text-sm"
                          style={{ backgroundColor: c.color }}
                        >
                          {c.name.charAt(0).toUpperCase()}
                        </span>
                        <div>
                          <span className="font-extrabold text-sm text-[var(--ink)] block">
                            {c.name}
                          </span>
                          <span className="text-xs font-semibold text-[var(--sub)]">
                            {c.date}
                          </span>
                        </div>
                      </div>
                      <div className="text-[var(--rx-lime)] text-base tracking-tight">
                        {'★'.repeat(c.rating)}
                        <span className="text-slate-300">{'★'.repeat(5 - c.rating)}</span>
                      </div>
                    </div>

                    <p className="text-sm text-[var(--ink)] leading-relaxed m-0 mt-2">
                      {c.comment}
                    </p>
                  </div>

                  {c.reply && (
                    <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <button
                        type="button"
                        onClick={() => toggleReply(c.id)}
                        className="text-xs font-bold text-[var(--rx-ico)] hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        {expandedReplies[c.id] ? 'Hide reply' : 'View reply'}
                      </button>

                      {expandedReplies[c.id] && (
                        <div className="mt-2 p-2.5 rounded-lg border-l-4 border-l-[var(--rx-lime)] bg-[var(--sec)] text-xs text-[var(--sub)]">
                          <b className="text-[var(--ink)] font-bold">RaXa: </b>
                          {c.reply}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Story Paragraph */}
          <div className="text-center max-w-2xl px-2">
            <p className="text-sm sm:text-base leading-relaxed text-[var(--ink)] m-0">
              RaXa Systems began with two pandas, one big idea and a lot of bamboo. We had no huge team and no big budget. What we had was each other, and the people who believed in us along the way: our first users, our friends, and everyone who took the time to tell us what worked and what didn&rsquo;t. Every comment on this page helped shape what you see today. Two pandas built this, but it took all of you to make it real. Thank you for growing with us. The best is still ahead.
            </p>
          </div>

          {/* QR PH Box (Buy us a bamboo) */}
          <figure className="flex flex-col items-center m-0">
            <div className="w-40 sm:w-48 aspect-square rounded-2xl bg-white border-4 border-[#12263a] p-3 flex flex-col items-center justify-center text-center shadow-md">
              <div className="text-xs font-extrabold text-[#12263a] tracking-widest uppercase mb-1">
                QR PH CODE
              </div>
              {/* QR Pattern visual mock */}
              <div className="w-24 h-24 bg-[#12263a] rounded-lg p-1 grid grid-cols-4 gap-1">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-[2px] ${
                      (i % 3 === 0 || i === 7 || i === 14) ? 'bg-white' : 'bg-[#95d600]'
                    }`}
                  />
                ))}
              </div>
              <div className="text-[10px] font-bold text-slate-500 mt-1">Scan with any bank app</div>
            </div>
            <figcaption className="mt-2.5 font-extrabold text-sm sm:text-base text-[var(--ink)]">
              Buy us a bamboo
            </figcaption>
          </figure>
        </div>

        {/* Modal: Write a Comment Dialog */}
        {isDialogOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d1c2b]/75 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg bg-[var(--bg)] border border-[color-mix(in_srgb,var(--rx-blue)_30%,transparent)] rounded-3xl p-6 sm:p-8 shadow-2xl">
              <button
                type="button"
                onClick={() => setIsDialogOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-[var(--sub)] hover:text-[var(--ink)] flex items-center justify-center text-xl font-bold cursor-pointer"
                aria-label="Close"
              >
                &times;
              </button>

              <h3 className="text-2xl font-extrabold text-[var(--ink)] mb-4">
                Leave a comment
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="fbEmail" className="block text-xs font-extrabold text-[var(--ink)] mb-1">
                    Email address
                  </label>
                  <input
                    id="fbEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-[var(--sec)] text-[var(--ink)] text-sm focus:border-[var(--rx-blue)] outline-none"
                  />
                  <span className="text-[11px] text-[var(--sub)] block mt-1">
                    Your email will be masked publicly (e.g. ma***)
                  </span>
                </div>

                <div>
                  <label htmlFor="fbText" className="block text-xs font-extrabold text-[var(--ink)] mb-1">
                    Your comment
                  </label>
                  <textarea
                    id="fbText"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Tell us what you liked, or what needs improvement..."
                    rows={4}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-[var(--sec)] text-[var(--ink)] text-sm focus:border-[var(--rx-blue)] outline-none resize-none"
                  />
                </div>

                <div>
                  <span className="block text-xs font-extrabold text-[var(--ink)] mb-1">
                    Rating (1 to 5 stars)
                  </span>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`text-2xl p-1 bg-transparent border-0 cursor-pointer transition-transform hover:scale-125 ${
                          star <= rating ? 'text-[var(--rx-lime)]' : 'text-slate-300'
                        }`}
                      >
                        ★
                      </button>
                    ))}
                    <span className="ml-2 font-bold text-sm text-[var(--sub)]">
                      {rating} / 5
                    </span>
                  </div>
                </div>

                {statusMsg && (
                  <p
                    className={`text-xs font-bold m-0 ${
                      statusMsg.ok ? 'text-[#3f7a00]' : 'text-red-500'
                    }`}
                  >
                    {statusMsg.text}
                  </p>
                )}

                <div className="flex items-center justify-end gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setIsDialogOpen(false)}
                    className="px-4 py-2 text-xs font-bold text-[var(--sub)] hover:text-[var(--ink)] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#12263a] text-[#eef1f7] text-sm font-extrabold rounded-full border-2 border-[var(--rx-lime)] hover:bg-[var(--rx-lime)] hover:text-[#12263a] transition-colors cursor-pointer"
                  >
                    Submit comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
