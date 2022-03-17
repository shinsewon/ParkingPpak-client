import {useState, useCallback} from 'react';

type onChangeType = (name: string) => (value: string) => void;

const useInput = <IState extends Partial<IState>>(
  initValue: IState,
): [IState, onChangeType] => {
  const [form, setForm] = useState(initValue);

  const onChange = useCallback(
    (name: string) => (value: string) => {
      setForm(form => ({...form, [name]: value}));
    },
    [],
  );

  return [form, onChange];
};

export default useInput;
