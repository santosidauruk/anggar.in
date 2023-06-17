import React, { useCallback, useRef } from 'react';
import clsx from 'clsx';
import { toPng } from 'html-to-image';
interface Props {
  isHaveResult: boolean;
}

const ExportResult = ({ isHaveResult }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);
  return (
    <React.Fragment>
      <div ref={ref}>
        <h2 className="text-purple-500">Contoh</h2>
        <div className="w-96 h-96 bg-red-600"></div>
      </div>
      <div className="border-t-neutral-400 border-t grid justify-items-center px-4 grid-cols-1 text-xs lg:text-base">
        <button
          type="submit"
          className={clsx(
            'border font-medium rounded-lg px-10 py-3 md:py-5 my-5 w-full lg:w-[400px]',
            isHaveResult
              ? 'text-purple-700 border-purple-700'
              : 'text-neutral-400 border-neutral-400'
          )}
          // disabled={!isHaveResult}
          onClick={onButtonClick}
        >
          Simpan Sebagai PDF 🗒
        </button>
      </div>
    </React.Fragment>
  );
};

export default ExportResult;
