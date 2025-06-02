class TextHelper {
    private static _instance: TextHelper;
    private constructor() {
    }
    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }
   public getDigitsFromText(text: string): number {
    const match = text.match(/-?\$?\d{1,3}(?:,\d{3})*(?:\.\d+)?|-?\$?\d+(?:\.\d+)?/);
    if (match) {
        // Remove $ and commas before converting
        const cleaned = match[0].replace(/[$,]/g, '');
        return Number(cleaned);
    }
    return 0;
}

}
export default TextHelper.Instance