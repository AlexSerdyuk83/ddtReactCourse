export function getDate(): string {
  const date: any = new Date();
  const month: any = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day: any = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hour: any = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes: any = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds: any = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${day}:${month}:${month} ${hour}:${minutes}:${seconds}`
}
