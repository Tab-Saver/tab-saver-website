export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* File/Document base */}
      <path
        d="M25 10 L25 90 L75 90 L75 30 L60 10 Z"
        fill="white"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      {/* Folded corner */}
      <path
        d="M60 10 L60 30 L75 30 Z"
        fill="#F3F4F6"
        stroke="#E5E7EB"
        strokeWidth="2"
      />
      {/* Lines on document */}
      <line x1="35" y1="40" x2="65" y2="40" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="50" x2="65" y2="50" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="60" x2="55" y2="60" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
      
      {/* Save ribbon/wrap */}
      <path
        d="M15 30 L15 70 L50 50 L85 70 L85 30 Z"
        fill="#FDB022"
        opacity="0.9"
      />
      <path
        d="M15 30 L50 50 L85 30"
        fill="none"
        stroke="#F59E0B"
        strokeWidth="1.5"
      />
      
      {/* Bookmark effect on ribbon */}
      <path
        d="M15 70 L50 50 L85 70 L85 75 L50 55 L15 75 Z"
        fill="#F59E0B"
      />
    </svg>
  );
}