import React, {
  FunctionComponent,
  ChangeEvent,
  KeyboardEvent,
  useState,
  useEffect,
  useRef,
} from 'react';
import type { LiteralUnion } from '../../../types';
import './RightBarKVField.css';

type RightBarKVFieldProps = {
  label: string;
  type?: LiteralUnion<
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week',
    string
  >;
};

const RightBarKVField: FunctionComponent<RightBarKVFieldProps> = ({
  label,
  type,
}: RightBarKVFieldProps) => {
  const [oldVal, setOldVal] = useState('');
  const [currVal, setCurrVal] = useState('');
  const [mouseIsDown, setMouseIsDown] = useState(false);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setOldVal(currVal);
      (document.activeElement as HTMLElement).blur();
    }
    if (event.key === 'Escape') {
      setCurrVal(oldVal);
      (document.activeElement as HTMLElement).blur();
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrVal(event.target.value);
  };
  const handleBlur = () => {
    setOldVal(currVal);
  };
  const ref = useRef(null);

  if (type === 'number') {
    const handleMouseDown = (event: MouseEvent) => {
      if (event.button === 0) {
        setMouseIsDown(true);
      }
    };
    const handleMouseUp = (event: MouseEvent) => {
      if (event.button === 0 && mouseIsDown) {
        setMouseIsDown(false);
      }
    };
    const handleMouseMove = (event: MouseEvent) => {
      if (mouseIsDown) {
        const speed = 1;
        const delta = event.movementX;
        const adjustedDelta = Math.round(delta * speed);
        setCurrVal((parseInt(currVal) + adjustedDelta).toString());
        setOldVal((parseInt(oldVal) + adjustedDelta).toString());
      }
    };
    useEffect(() => {
      const el = ref.current;
      el?.addEventListener('mousedown', handleMouseDown as EventListener);
      window.addEventListener('mouseup', handleMouseUp as EventListener);
      window.addEventListener('mousemove', handleMouseMove as EventListener);

      return () => {
        el?.removeEventListener('mousedown', handleMouseDown as EventListener);
        window.removeEventListener('mouseup', handleMouseUp as EventListener);
        window.removeEventListener(
          'mousemove',
          handleMouseMove as EventListener,
        );
      };
    });
  }

  return (
    <label
      className={`rightbar-kv-field ${
        type === 'number' ? 'rightbar-kv-field--number' : ''
      }`}
      ref={ref}
    >
      <span className="rightbar-kv-field__key">{label}</span>
      <input
        className="rightbar-kv-field__value"
        spellCheck="false"
        autoComplete="new-password"
        value={currVal}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        type={type}
      />
    </label>
  );
};

export default RightBarKVField;
