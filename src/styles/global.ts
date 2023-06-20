import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
		scrollbar-width: thin; /* "auto" or "thin" */
    scrollbar-color: #d8d8d8 #ffffff3a; /* scroll thumb and track */
		scroll-behavior: smooth;
		:target {
			scroll-margin-top: .8em;
		}
  }

    *::-webkit-scrollbar {
    	width: 9px;
    }

    *::-webkit-scrollbar-track {
     background: #ffffff3a;
     border-radius: 20px;
		 scroll-behavior: smooth;
		 :target {
			scroll-margin-top: .8em;
		}
    }

		*::-webkit-scrollbar-thumb {
			background-color: #d8d8d8;
			border-radius: 20px;
     	border: 3px solid transparent;
			 scroll-behavior: smooth;
			 :target {
				scroll-margin-top: .8em;
			}
 	  }
		
  }
`;

	// '&::-webkit-scrollbar': {
		// 	width: '5px',
		// },
		// '&::-webkit-scrollbar-thumb': {
		// 	backgroundColor: '#ffff4d',
		// 	borderRadius: '20px',
		// 	border: '3px solid transparent',
		// }