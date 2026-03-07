import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate('/')}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 28px',
          background: 'rgba(10,10,15,0.85)',
          border: '1px solid rgba(139,92,246,0.4)',
          borderRadius: '100px',
          color: '#c4b5fd',
          fontSize: '0.9rem',
          fontWeight: '600',
          cursor: 'pointer',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 4px 24px rgba(139,92,246,0.2)',
          fontFamily: "'DM Sans', sans-serif",
          transition: 'all 0.2s ease',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(139,92,246,0.25)';
          e.currentTarget.style.borderColor = 'rgba(139,92,246,0.7)';
          e.currentTarget.style.transform = 'translateX(-50%) translateY(-2px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(10,10,15,0.85)';
          e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)';
          e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
        }}
      >
        ← BACK
      </button>

      {/* Bottom padding so content doesn't hide behind button */}
      <div style={{ height: '80px' }} />
    </>
  );
};

export default BackButton;