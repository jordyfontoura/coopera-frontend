export interface IMarkdownProps {
  content: any;
}

export function Markdown(props: IMarkdownProps) {
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  );

}