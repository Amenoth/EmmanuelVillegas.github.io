// import original module declarations
import 'styled-components';

import { Breakpoints } from './createBreakpoints';

// and extend them!

interface IDrawer {
	width: string;
}
interface IBackground {
	paper: string;
	default: string;
}

interface IPalette {
	main: string;
	light: string;
	dark: string;
	contrastText: string;
}

interface ITextColors {
	primary: string;
	secondary: string;
	disabled: string;
	hint: string;
	divider: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		drawer: IDrawer;
		breakpoints: Breakpoints;
		palette: {
			background: IBackground;
			primary: IPalette;
			secondary: IPalette;
			text: ITextColors;
		};
	}
}
