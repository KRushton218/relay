import { VisualPlaceholder } from "./VisualPlaceholder";

export function FeatureBlock({ title, copy, reverse = false, graphic }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
        reverse ? 'md:[&>*:first-child]:order-last' : ''
      } max-w-7xl mx-auto`}
    >
      {graphic || <VisualPlaceholder />}
      <div className="space-y-4">
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="text-lg text-brand-muted leading-relaxed">{copy}</p>
      </div>
    </div>
  );
}