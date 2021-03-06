import * as dialogs from "@nativescript/core/ui/dialogs";

export class MovieListHelper {
  static showDeleteMovieConfirmation(message: string): Promise<boolean> {
    return dialogs.confirm({
      title: 'Excluir fime',
      message: message,
      okButtonText: 'Excluir',
      cancelButtonText: 'Manter Filme'
    });
  }
}