class CommandTab {
  static changeTabId(tabId: string) {
    (window as any).store.onChangeTabId(tabId);
  }
}

class CommandWindow {
  static getMaximizeStatus() {
    return (window as any).store.isMaximized;
  }

  static maximize() {
    (window as any).pre.runGlobalAsync("maximize");
  }

  static minimize() {
    (window as any).pre.runGlobalAsync("minimize");
  }

  static unmaximize() {
    (window as any).pre.runGlobalAsync("unmaximize");
  }
}

export class Command {
  static readonly Tab = CommandTab;
  static readonly Window = CommandWindow;
}
