import { ArrowUpRight } from 'lucide-react';
import { GOOGLE_PLAY_URL } from '@/lib/site';

export function PlayStoreLink({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return (
    <a href={GOOGLE_PLAY_URL} className={`play-store-link ${compact ? 'play-store-link--compact' : ''} ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22">
        <path d="M3.2 2.1c-.6-.4-1.2 0-1.2.7v18.4c0 .7.6 1.1 1.2.7L13.7 12 3.2 2.1Z" fill="#00D7FE" />
        <path d="M3.2 2.1 16.4 8.7 13.7 12 3.2 2.1Z" fill="#00F076" />
        <path d="m16.4 8.7 5.6 2.8c.8.4.8 1.6 0 2l-5.6 2.8-2.7-4.3 2.7-3.3Z" fill="#FFCE00" />
        <path d="m3.2 21.9 13.2-6.6-2.7-3.3L3.2 21.9Z" fill="#F7274A" />
      </svg>
      <span>{compact ? 'Google Play' : 'Get it on Google Play'}</span>
      <ArrowUpRight size={17} aria-hidden="true" className="play-store-arrow" />
    </a>
  );
}
