import { Stat } from 'obsidian';

export interface FileAccessor {
  isEmbed: boolean;
  target: string;
  stats?: Stat;
}

export function markRangeForDeletion(
  str: string,
  range: { start: number; end: number }
): string {
  const len = range.end - range.start;

  return (
    str.slice(0, range.start) + '\u0000'.repeat(len) + str.slice(range.end)
  );
}

export function executeDeletion(str: string) {
  return str.replace(/\s*\0+\s*/g, ' ').trim();
}

export function replaceNewLines(str: string) {
  const lines: string[] = str.trim().split('\n')
  const shifted = [lines[0], ...lines.splice(1).map(v => `  ${v}`)]
  return shifted.join('\n').trim()
}

export function replaceBrs(str: string) {
  const lines: string[] = str.trim().split('\n')
  const shifted = [lines[0], ...lines.splice(1).map(v => v.slice(2))]
  return shifted.join('\n').trim()
}

export function parseLaneTitle(str: string) {
  str = replaceBrs(str);

  const match = str.match(/^(.*?)\s*\((\d+)\)$/);
  if (match == null) return { title: str, maxItems: 0 };

  return { title: match[1], maxItems: Number(match[2]) };
}
