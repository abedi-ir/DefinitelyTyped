// Type definitions for react-spinkit 3.0.0
// Project: https://github.com/KyleAMathews/react-spinkit
// Definitions by: Qubo <https://github.com/tkqubo>, Mleko <https://github.com/mleko>, Tom Crockett <https://github.com/pelotom>, zzanol <https://github.com/zzanol>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="react" />

declare namespace spinner {
	export interface SpinnerProps {
        /**
         * Specify spinner to use.
         */
        name?: 'three-bounce' | 'double-bounce' | 'rotating-plane' | 'folding-cube' | 'wave' | 'wandering-cubes' | 'pulse' | 'chasing-dots' | 'circle' | 'cube-grid' | 'wordpress';
        /**
         * Disable the initial fade-in of the spinner.
         */
        noFadeIn?: boolean;
        /**
         * Change the default "spinner" className.
         */
        overrideSpinnerClassName?: string;
        /**
         * Component className.
         */
        className?: string;
	}

	export interface Spinner extends React.ComponentClass<SpinnerProps> {
	}
}

declare const spinner: spinner.Spinner;
export = spinner;
