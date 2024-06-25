import React from "react";

const InfoCard = ({ icon, propKey, value }) => {
  return (
    <article className="h-20 rounded-lg dark:bg-dark-800 bg-white p-4 flex items-center gap-4">
      <span className="text-green-500 text-2xl">{icon}</span>
      <div className="space-y-2">
        <p>
          <strong>{propKey}</strong>
        </p>
        <p className="text-sm">{value}</p>
      </div>
    </article>
  );
};

export default InfoCard;
