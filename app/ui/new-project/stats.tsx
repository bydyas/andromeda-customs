import { useState } from 'react';
import { ThumbsUp, ThumbsDown, Rocket } from 'lucide-react';

export default function Stats() {
  const [liked, setLiked] = useState<boolean>(false);
  const [disliked, setDisliked] = useState<boolean>(false);

  return (
    <div>
      <div className="flex gap-4">
        <button
          className="flex items-center gap-2"
          onClick={() => setLiked((prev) => !prev)}
        >
          <ThumbsUp fill={liked ? 'green' : 'transparent'} />
          <span className="font-medium">{liked ? 123 : 122}</span>
        </button>
        <button
          className="flex items-center gap-2"
          onClick={() => setDisliked((prev) => !prev)}
        >
          <ThumbsDown fill={disliked ? 'red' : 'transparent'} />
          <span className="font-medium">{disliked ? 22 : 13}</span>
        </button>
      </div>
      <div className="mt-2 flex items-center justify-end gap-2">
        <Rocket />
        <span className="font-medium">3450</span>
      </div>
    </div>
  );
}
