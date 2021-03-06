import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const iconIndex = {
  FILE: {
    dir: regular("folder"),
    gen: regular("file"),
    pdf: regular("file-pdf"),
    doc: regular("file-word"),
    ppt: regular("file-powerpoint"),
    xls: regular("file-excel"),
    zip: regular("file-zipper"),
    vid: regular("file-video"),
    img: regular("file-image"),
    aud: regular("file-audio"),
    src: regular("file-code"),
    txt: regular("file-lines"),
    note: regular("note-sticky"),
  },
  BOX: {
    FILE: solid("folder"),
    DATAROOM: solid("folder"),
    TEMPORARY: solid("folder"),
  },
  GENERAL: {
    MENU: solid("ellipsis-vertical"),
    SEARCH: solid("magnifying-glass"),
  },
};

type FAIconProps = {
  type: "FILE" | "BOX" | "GENERAL";
  icon: string;
};

export default function FAIcon(props: FAIconProps) {
  if (!props.type || !props.icon) return <></>;
  return <FontAwesomeIcon icon={iconIndex[props.type][props.icon]} size="lg" />;
}
