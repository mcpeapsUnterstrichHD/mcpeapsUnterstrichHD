# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
bun x sv create --template demo --types ts --add devtools-json sveltekit-adapter="adapter:auto" tailwindcss="plugins:typography,forms" paraglide="languageTags:de-de, en-us+demo:yes" --install bun mcpeapsUnterstrichHD-sveltekit
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

---

## Updating shadcn-svelte Components

All shadcn-svelte component files can be safely overwritten because the Liquid Glass
visual customisations live in `src/app.css` via `[data-slot="..."]` CSS selectors,
not inside the component files themselves.

### 1. Reset all components to latest defaults

```sh
npx shadcn-svelte@latest add --all --yes --overwrite
```

If pnpm fails with a store mismatch, run:

```sh
CI=true pnpm install
```

### 2. Re-apply functional changes

The following files contain **functional** (not visual) modifications that the
overwrite will reset. Re-apply them after every update:

#### `src/lib/components/ui/sidebar/context.svelte.ts`

Add the `IsTablet` import and wire it into `SidebarState`:

```diff
 import { IsMobile } from "$lib/hooks/is-mobile.svelte.js";
+import { IsTablet } from "$lib/hooks/is-tablet.svelte.js";
```

```diff
 class SidebarState {
   #isMobile: IsMobile;
+  #isTablet: IsTablet;

   constructor(props: SidebarStateProps) {
     this.#isMobile = new IsMobile();
+    this.#isTablet = new IsTablet();
   }

+  get isTablet() {
+    return this.#isTablet.current;
+  }
 }
```

#### `src/lib/components/ui/sidebar/sidebar-provider.svelte`

Add the `untrack` import and the tablet auto-collapse effect:

```diff
+import { untrack } from "svelte";
```

After the `setSidebar(...)` call, add:

```svelte
$effect(() => {
  if (sidebar.isTablet) {
    untrack(() => sidebar.setOpen(false));
  }
});
```

#### `src/lib/components/ui/button/button.svelte`

Restore Apple HIG 44pt touch targets for small buttons:

```diff
 size: {
-  sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
+  sm: "h-9 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
-  "icon-sm": "size-8",
+  "icon-sm": "size-9",
 }
```

### 3. Files you do NOT need to touch

These are handled entirely by CSS in `src/app.css` (data-slot overrides):

- `dialog/dialog-content.svelte` — glass thick
- `alert-dialog/alert-dialog-content.svelte` — glass thick
- `sheet/sheet-content.svelte` — glass thick
- `drawer/drawer-content.svelte` — glass thick
- `popover/popover-content.svelte` — glass standard
- `hover-card/hover-card-content.svelte` — glass standard
- `tooltip/tooltip-content.svelte` — glass thin
- `tabs/tabs-list.svelte` — glass thin
- `input/input.svelte` — subtle blur

### 4. Files that are never overwritten

These are custom files outside the shadcn-svelte component tree:

- `src/lib/hooks/is-tablet.svelte.ts` — `IsTablet` media query class
- `src/lib/components/TabBar.svelte` — iOS-style bottom tab bar
- `src/lib/components/AppSidebar.svelte` — macOS-style sidebar
- `src/app.css` — all glass material utilities and data-slot overrides
