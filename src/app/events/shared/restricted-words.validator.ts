import { FormControl } from '@angular/forms';

export function restrictedWords(words: Array<string>) {
  return (form: FormControl): { [key: string]: any } => {
    if (!words) {
      return null;
    }

    const invalidWords = words.map(w => form.value.includes(w) ? w : null).filter(w => w != null);

    return invalidWords && invalidWords.length > 0 ? { 'restrictedWords': invalidWords.join(', ') } : null;
  };
}
