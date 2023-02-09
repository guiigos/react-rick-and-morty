import React from "react";

const SIZE_TOTAL = 5;
const SIZE_REDUCED = 3;

type PaginationProps = {
  total?: number,
  current: number,
  hasNext: boolean,
  hasPrev: boolean,
  onNext: React.MouseEventHandler<HTMLInputElement>;
  onPrev: React.MouseEventHandler<HTMLInputElement>;
  onPage: (page: number) => void;
};

type ButtonProps = {
  first?: boolean,
  last?: boolean,
  current?: boolean,
};

const Button: React.FC<React.HTMLProps<HTMLInputElement> & ButtonProps> = ({ first = false, last = false, current = false, ...rest }): React.ReactElement => (
  <>
    {last && <span className="select-none">...</span>}
    <input type="button" className={`p-1 m-1 w-8 h-8 cursor-pointer font-bold bg-yellow-600 rounded-lg ${current && "text-red-700"}`} {...rest} />
    {first && <span className="select-none">...</span>}
  </>
);

const Pagination: React.FC<PaginationProps> = ({ total = 0, current, hasNext, hasPrev, onNext, onPrev, onPage }): React.ReactElement => {
  const showPagination = total > SIZE_TOTAL;
  const showFirst = current >= SIZE_TOTAL;
  const showLast = current <= total - SIZE_TOTAL + 1;

  const size = showPagination ? (showFirst && showLast ? SIZE_REDUCED : SIZE_TOTAL) : total;

  const numbers = Array
    .from(new Array(size))
    .map((_, index) => {
      if (current < SIZE_TOTAL) return ++index;
      if (current > total - SIZE_TOTAL + 1) return total - index;

      return current + index - (size === SIZE_TOTAL ? 2 : 1);
    })
    .sort((a, b) => a - b);

  return (
    <div className="text-center">
      {hasPrev && <Button onClick={onPrev} value="<" />}
      {showFirst && showPagination && <Button first onClick={() => onPage(1)} value="1" />}

      {numbers.map((value: number) => <Button key={value} current={value === current} onClick={() => onPage(value)} value={value} />)}

      {showLast && showPagination && <Button last onClick={() => onPage(total)} value={total} />}
      {hasNext && <Button onClick={onNext} value=">" />}
    </div>
  );
};

export default Pagination;
