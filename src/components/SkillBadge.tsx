import { Tag } from "./ui/Tag";
import type { Skill } from "../types";

type SkillBadgeProps = {
  skill: Skill;
};

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <li>
      <Tag label={skill.label} />
    </li>
  );
}

export default SkillBadge;
