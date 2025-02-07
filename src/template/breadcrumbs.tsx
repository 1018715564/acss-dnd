import { renderToString } from "vue/server-renderer";
import type { Menu, Template } from "./d";

const temp: Template[] = [
  {
    jsx: (
      <div class="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
    ),
    str: "",
  },
  {
    jsx: (
      <div class="text-sm breadcrumbs">
        <ul>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              Documents
            </a>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-4 h-4 mr-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Add Document
          </li>
        </ul>
      </div>
    ),
    str: "",
  },
  {
    jsx: (
      <div class="max-w-xs text-sm breadcrumbs">
        <ul>
          <li>Long text 1</li>
          <li>Long text 2</li>
          <li>Long text 3</li>
          <li>Long text 4</li>
          <li>Long text 5</li>
        </ul>
      </div>
    ),
    str: "",
  },
];

export const initBreadcrumbs = async (): Promise<Menu> => {
  for (let item of temp) {
    item.str = await renderToString(item.jsx);
  }

  return {
    id: "breadcrumbs",
    text: "breadcrumbs 面包屑",
    wrapClass: [],
    components: temp,
  };
};
