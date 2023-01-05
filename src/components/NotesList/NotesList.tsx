import { useTranslation } from "react-i18next";

interface NotesList {
  fr?: Array<string>;
  en?: Array<string>;
}

interface NotesListProps {
  receipeFilename: string;
}

export function NotesList(props: NotesListProps) {
  const { i18n, t } = useTranslation();

  if (!props.receipeFilename) {
    return null;
  }

  const notes: string[] = i18n.t(`${props.receipeFilename}.notes`, {
    returnObjects: true,
  });

  if (!Array.isArray(notes)) {
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
