'use client';

const ResponseStats = () => {
  return (
    <div className="nes-container is-dark">
      <h3 className="text-lg font-bold mb-4 text-center">RESPONSE TIME</h3>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-green-400 mb-1">&lt; 24h</div>
          <div className="text-xs text-gray-300">Email Response</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
          <div className="text-xs text-gray-300">Reply Rate</div>
        </div>
      </div>
    </div>
  );
};

export default ResponseStats;
