type License = {
  name: string;
  url: string;
};

enum Licenses {
  MIT = "MIT License",
  GPL = "GNU General Public License v3.0",
  UNLICENSE = "Unlicense",
}

type LicensesRecord = Record<Licenses, License>;

const licenses: LicensesRecord = {
  [Licenses.MIT]: {
    name: "MIT License",
    url: "https://opensource.org/licenses/MIT",
  },
  [Licenses.GPL]: {
    name: "GNU General Public License v3.0",
    url: "https://opensource.org/licenses/GPL-3.0",
  },
  [Licenses.UNLICENSE]: {
    name: "Unlicense",
    url: "https://unlicense.org/",
  },
};