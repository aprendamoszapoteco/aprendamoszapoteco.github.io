export const otherDownloads = [
  {
    nameToImage: 'windows',
    operatingSystem: ['Windows'],
    suportedVersions: ['Windows 8, 10, 11'],
    version: '1.0.0 (Windows)',
    dataDownload: {
      current: { // 2026-03-20
        links: ['https://www.mediafire.com/file/qvsddyufw3s5nnp/Te%2527dna_diste-1.1.0_Setup.exe/file'],
        description: 'Versión 1.1.0 oficial para sistemas operativos Windows (8, 10, 11).'
      },
      '2021-07-25': {
        links: ['https://www.mediafire.com/file/05s1xevfjv43ej5/Te%2527dna_diste-1.0.0_Setup.exe/file'],
        description: 'Versión 1.0.0 oficial para sistemas operativos Windows (7, 8, 10).'
      }
    }
  },
  {
    nameToImage: 'linux',
    operatingSystem: ['.deb', '.rpm'],
    suportedVersions: ['Debian, Ubuntu', 'Fedora, Red Hat, SUSE'],
    version: '1.0.0 (Linux)',
    dataDownload: {
      current: { // 2026-03-20
        links: [
          'https://www.mediafire.com/file/d6kqh7a7jibhqkn/tedna-diste_1.1.0_amd64.deb/file',
          'https://www.mediafire.com/file/ilqvh2uf6y4rpji/tedna-diste-1.1.0-1.x86_64.rpm/file'
        ],
        description: 'Versión 1.1.0 oficial para distribuciones Linux basadas en Debian y Red Hat.'
      },
      '2021-07-25': {
        links: [
          'https://www.mediafire.com/file/lgbbrm9w8da97wr/tedna-diste_1.0.0_amd64.deb/file',
          'https://www.mediafire.com/file/0v84raq9xd1d2z7/tedna-diste-1.0.0-1.x86_64.rpm/file'
        ],
        description: 'Versión 1.0.0 oficial para distribuciones Linux basadas en Debian y Red Hat.'
      }
    }
  },
  {
    nameToImage: 'apple',
    operatingSystem: ['Mac'],
    suportedVersions: ['macOS 12.0+'],
    version: '1.0.0 (Mac)',
    dataDownload: {
      current: { // 2026-03-20
        links: [
          'https://www.mediafire.com/file/sucjaeme9bq51ua/Te%2527dna_diste-darwin-arm64-1.1.0.zip/file'
        ],
        description: 'Versión 1.1.0 oficial para sistemas operativos macOS.'
      }
    }
  }
];