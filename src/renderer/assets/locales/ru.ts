const ru = {
  pages: {
    main: {
      title: 'Главная',
      note: {
        hints: {
          delete: 'Удалить',
        },
      },
      footer: {
        versionLayout: 'вер. ',
        hints: {
          settingsButton: 'Настройки',
          versionButton: 'Заметки о выпуске',
        },
      },
    },
    mainSettings: {
      title: 'Настройки',
      sections: {
        language: {
          title: 'Язык',
          rusLocale: 'Русский',
          enLocale: 'English',
        },
        theme: {
          title: 'Тема',
        },
      },
    },
    themeSettings: {
      title: 'Настройки • Тема',
    },
    patchNotes: {
      title: 'Заметки о выпуске',
      patch: {
        versionLabel: 'Версия',
        patchZeroDotOne: {
          paragraphOne: 'Добавил новые страницы:',
          dottedListOne: [
            'Главная страница',
            'Страница настроек',
            'Страница заметок о выпуске',
          ],
        },
        patchZeroDotTwo: {
          paragraphOne: 'Обновил страницу заметок о выпуске.',
          paragraphTwo:
            'Теперь на этой странице будут показываться первые шесть заметок о выпуске, чтобы посмотреть более старые заметки, можно нажать на специальную кнопку.',
        },
      },
      showMoreButton: 'Посмотреть все заметки о выпуске',
    },
  },
};

export default ru;
