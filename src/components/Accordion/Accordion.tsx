import { ReactNode, useState } from 'react';

import './Accordion.module.css';

function Accordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion">
      <div>
        <h3 className="accordion-title">
          {title}{' '}
          <button onClick={() => setOpen(!open)}>
            {open ? 'Close' : 'Open'}
          </button>
        </h3>
      </div>
      {open && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default Accordion;
