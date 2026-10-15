# Echo of the Abyss

Campaign chronicle. Static HTML/CSS/JS, no build required. Serve `dist/` locally.

Live site: https://budbay1.github.io/echo-of-the-abyss/
GitHub repository: https://github.com/budbay1/echo-of-the-abyss
The existing Sites project identity is retained in `.openai/hosting.json`; current hosting is GitHub Pages.

## Sources
- Published prologues: https://echooftheabyss.blogspot.com/2026/07/prologue-takina-yndrial.html and https://echooftheabyss.blogspot.com/2026/10/prologue-juan-caelen.html
- Campaign hero and scene art: the original Blogger site.
- Original character portraits: Echo of the Abyss Master Vault / 05_Players. Drive IDs: Juan `1tyDbZRcepsKO_Nc4hbzUM534NVds4GqQ`, Takina `1S82sPO29KKiWW7Th5038zF1b5LJy0E-B`, Yndrial `1IgZC06muuZ0Va2ENAQjLqaaTK6DBhwRf`, Caelen `1rjqIPZytBTtI5txZdDvrcebJi-mlgL-4`.

## Editorial decisions
Recaps in `dist/posts.json` retain the published prose. Introductory summaries and reference entries are derived from those prologues, without adding unseen events or DM secrets. Original publication dates are labeled, and the two prologues are described as parallel stories. Older Players notes contain naming differences (Takinga/Takina, Henry/Juan, Kastor/Caster); profiles use published names and the Rook entry uses the published title without silently reconciling draft identities. Caelen's surname is omitted from the profile pending reconciliation of Thorn/Thorne. Takina's portrait carries a bow but the published class is monk; the original art is preserved.

## Updating
This first version is an imported snapshot, not live Drive synchronization. Update approved summaries in `dist/posts.json` and the relevant party/directory entries in `dist/app.js`, add optimized artwork under `dist/assets`, then publish the contents of `dist/` to the existing GitHub repository root. GitHub Pages deploys the `main` branch. No recording upload, transcription pipeline, direct editing interface, or background automation is implemented. Keep planning drafts and private DM material outside `dist/` and the published source repository. Never place authentication tokens or temporary signed download URLs in tracked files.


## Campaign map

`dist/assets/mistledale.svg` is an original regional campaign sketch, not an official map reproduction or a geographic projection. It is deliberately labeled not to scale. The Moonsea Ride crosses the River Ashaba at Ashabenford; woodland, route geometry, and marker offsets are schematic. No exact encounter coordinates, journey distances, stream name, or character origins are inferred.

- `dist/map-data.js` contains pins. Each has a stable ID, name, type (`place`, `event`, `party`, or `origin`), sketch x/y, precision label, summary, and arrays of session/entry/character IDs. Optional `anchor: [x,y]` draws a leader to the represented area.
- Keep coordinates in the 1100 × 720 sketch. Mark town-level and route-level locations as approximate; offsets distinguish markers without asserting building positions.
- Add origin pins only after the campaign establishes a birthplace. The Origins filter intentionally starts empty. Update the party pin when the story establishes a new position.
- Sessions currently use `forest` and `stables`; add a chapter option in `map.js` when adding sessions. The sidebar uses the existing party, directory, and recap records for links.
- Map links use `#map/<pin-id>`. The viewer supports zoom buttons, pointer panning, keyboard arrows / + / − / 0, chapter/type filters, and a keyboard-accessible location list.

Setting references: Volo’s Guide to the Dalelands (Mistledale); Forgotten Realms Campaign Guide (Mistledale). The contextual official map link is https://www.dndbeyond.com/resources/1782-map-of-faerun. No external map artwork was copied. The map credits include the Wizards Fan Content Policy notice.
