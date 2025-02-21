export function pipeline(...streams: NodeJS.ReadWriteStream[]) {
  return streams.reduce((prev, next) => prev.pipe(next));
}
