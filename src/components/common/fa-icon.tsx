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
    note: regular("note-sticky"),
  },
  BOX: {
    FILE: solid("dog"),
    DATAROOM: solid("euro-sign"),
    TEMPORARY: solid("bugs"),
  },
  GENERAL: {
    MENU: solid("ellipsis-vertical"),
  },
};

type FAIconProps = {
  type: "FILE" | "BOX" | "GENERAL";
  icon: string;
};

export default function FAIcon(props: FAIconProps) {
  if (!props.type || !props.icon) return <></>;
  return <FontAwesomeIcon icon={iconIndex[props.type][props.icon]} />;
}
