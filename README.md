This is a repo reproducing a but in preact-compat, where @headlessui/react types are
showing as errors, when they should pass type checking.

# Reproduction Steps

1. Install packages

I'm using `pnpm` for installation:

```bash
pnpm install
```

2. Run typescript:

```bash
npm run check
```

# Expected

It checks without error.

# Actual

I get an error that `className` is meant to be a function rather than a string:

```
src/app.tsx:25:33 - error TS2322: Type 'string' is not assignable to type '(bag: DisclosureRenderPropArg) => string'.

25     return <Disclosure as="nav" className="border-b border-gray-200 bg-white">
~~~~~~~~~
```

I'm pretty novice with the tooling around Typescript and Javascript, but I've tried setting `alias` and `override` 
keys in `package.json` and in `tsconfig.json`, and they seem to have no effect.