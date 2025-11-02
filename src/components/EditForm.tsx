import { type ChangeEvent, type FormEvent } from "react";

type Props = {
  title: string;
  description: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const EditForm = ({ title, description, onChange, onSubmit }: Props) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          placeholder="title"
          value={title}
          name="title"
          onChange={onChange}
        />
        <textarea
          placeholder="description"
          value={description}
          name="description"
          onChange={onChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default EditForm;
