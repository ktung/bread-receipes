import { useTranslation } from "react-i18next";

interface NotesList {
  fr?: Array<string>;
  en?: Array<string>;
}

interface NotesListProps {
  notes: NotesList;
}

export function NotesList(props: NotesListProps) {
  const { t } = useTranslation();

  if (!props.notes) {
    return null;
  }

  let notes: Array<string> = [];
  if (!!props.notes.fr) {
    notes = props.notes.fr;
  } else {
    return null;
  }

  return (
    <div className="mt-2 rounded-lg text-center">
      <h2 className="text-xl">{t("notes")}</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
