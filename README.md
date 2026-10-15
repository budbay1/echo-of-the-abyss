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


## Campaign atlas

The public map opens with a geographic Faerûn overview, with linked Mistledale and Sword Coast views. `dist/assets/faerun.svg` is newly drawn atlas artwork whose coastline and inland-sea geometry reference the 2001 Forgotten Realms Campaign Setting map (Rob Lazzaretti / Dennis Kauth). It preserves the broad 3e geographic layout. Terrain is simplified; it is not a measured travel map, a current political atlas, or a statement of the campaign year. The original reference raster is not shipped. The regional Mistledale artwork remains explicitly schematic and not to scale, with softer atlas styling.

### Shared records

`dist/map-data.js` separates maps, regions, locations, chapters, and campaign pins:

- `maps` defines each artwork, source dimensions, initial camera bounds, and optional regional filter. Faerûn and the Sword Coast share the same geographic artwork; the coast uses a closer camera view.
- `regions` defines overview anchors and links to regional maps. Overview activity counts are derived from the same filtered pin records, never maintained separately. Sword Coast is context only until campaign records establish a visit.
- `locations` defines stable place IDs, a region, and a world reference point. Each campaign pin has a `locationId`; events, sessions, and characters can reference the same place without duplicating it.
- `pins` retains the seven original stable IDs. Local x/y and optional leader anchors describe the 1100 × 720 Mistledale sketch, not exact geographic measurements. Continue to label uncertain town/route placements explicitly. New detailed regions require their own illustration and pin placements; do not reuse Mistledale coordinates on another map.
- `chapters` supplies filter labels. Pins reference chapter, directory-entry, and character IDs. Add new session IDs here when adding recaps.

No character origins, westward journey, Sword Coast visits, or travel distances are inferred. Add origin records and route history only when established in play. Update the party’s location record as the story advances; historical event pins remain at their original locations.

### Linking and controls

`#map` opens the overview. View links use `#map/faerun/party`, `#map/mistledale/wagon`, and `#map/sword-coast`. Original links such as `#map/wagon` continue to work. View switching preserves a selected pin when it belongs to both views; filters remain active across views. The viewer supports zoom buttons, pointer panning, keyboard arrows / + / − / 0, chapter/type filters, region markers, and a keyboard-accessible location list.

### References and verification

- Geographic reference and edition comparison: https://www.dragonslair.it/index.html/articles/guida-alle-mappe-dei-forgotten-realms-r1917/
- Regional setting references: Volo’s Guide to the Dalelands (Mistledale); Forgotten Realms Campaign Guide (Mistledale).
- The map credits retain the Wizards Fan Content Policy notice and distinguish the overview from the schematic regional map.
- Browser QA covered world/region switching, selected-record preservation, legacy deep links, chapter/type filters, no-visit context, zoom/reset/keyboard panning, and narrow-screen overflow. Public hosting remains the existing GitHub Pages repository.
