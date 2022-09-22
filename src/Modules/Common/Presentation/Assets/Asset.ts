abstract class Asset {
  abstract get path(): string;

  get localUrl() {
    const baseUrl = `${process.env.NEXT_PUBLIC_URL}`;
    return `${baseUrl}/assets/${this.path}`;
  }
}

export default Asset;
