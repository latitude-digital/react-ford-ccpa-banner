declare const fs: any;
interface FileToFormat {
    data: Record<string, any>;
    saveAs: string;
}
declare const filesToFormat: FileToFormat[];
declare function generateFormattedLocaleForFile(localeDataUnformatted: Record<string, any>, pathToSave: string): void;
