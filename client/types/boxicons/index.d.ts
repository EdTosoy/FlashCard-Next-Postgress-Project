interface BoxIconElement {
  name: string;
}

export declare global {
  namespace JSX {
    interface IntrinsicElements {
      "box-icon": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement, BoxIconElement>,
        HTMLElement
      >;
    }
  }
}
