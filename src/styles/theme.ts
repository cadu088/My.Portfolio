import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		gray: {
			"900": "#181B23",
			"800": "#111112",
			"700": "#353646",
			"600": "#4B4D63",
			"500": "#616480",
			"400": "#797D9A",
			"300": "#9699B0",
			"200": "#B3B5C6",
			"100": "#D1D2DC",
			"50": "#e4e4e4",
		},
		yellow: {
			"900": "#b3b300",
			"800": "#cccc00",
			"700": "#ffff00",
			"600": "#ffff00",
			"500": "#f4d732",
			"400": "#ffff4d",
			"300": "#ffff66",
			"200": "#ffff80",
			"100": "#fbf1b6",
			"50": "#ffffb3",
		},
		blue: {
			"900": "#13406c",
			"800": "#174d82",
			"700": "#1b5998",
			"600": "#1f66ad",
			"500": "#2272c3",
			"400": "#2680d9",
			"300": "#3c8cdd",
			"200": "#5299e0",
			"100": "#67a6e4",
			"50": "#7db3e8",
		}
	},
	fonts: {
		heading: 'Roboto',
		body: 'Roboto',
	},
	styles: {
		global: {
			scrollBehavior:"smooth",
			
			body: {
				bg: 'gray.800',
				color: 'gray.50',
				// overflowY: 'hidden',
				overflowX: 'hidden',
				scrollBehavior:"smooth"
			}
			
		}
	}
})