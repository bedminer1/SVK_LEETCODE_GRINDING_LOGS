
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #390411 
		"--color-primary-50": "225 217 219", // #e1d9db
		"--color-primary-100": "215 205 207", // #d7cdcf
		"--color-primary-200": "206 192 196", // #cec0c4
		"--color-primary-300": "176 155 160", // #b09ba0
		"--color-primary-400": "116 79 88", // #744f58
		"--color-primary-500": "57 4 17", // #390411
		"--color-primary-600": "51 4 15", // #33040f
		"--color-primary-700": "43 3 13", // #2b030d
		"--color-primary-800": "34 2 10", // #22020a
		"--color-primary-900": "28 2 8", // #1c0208
		// secondary | #AE3F05 
		"--color-secondary-50": "243 226 218", // #f3e2da
		"--color-secondary-100": "239 217 205", // #efd9cd
		"--color-secondary-200": "235 207 193", // #ebcfc1
		"--color-secondary-300": "223 178 155", // #dfb29b
		"--color-secondary-400": "198 121 80", // #c67950
		"--color-secondary-500": "174 63 5", // #AE3F05
		"--color-secondary-600": "157 57 5", // #9d3905
		"--color-secondary-700": "131 47 4", // #832f04
		"--color-secondary-800": "104 38 3", // #682603
		"--color-secondary-900": "85 31 2", // #551f02
		// tertiary | #F99936 
		"--color-tertiary-50": "254 240 225", // #fef0e1
		"--color-tertiary-100": "254 235 215", // #feebd7
		"--color-tertiary-200": "254 230 205", // #fee6cd
		"--color-tertiary-300": "253 214 175", // #fdd6af
		"--color-tertiary-400": "251 184 114", // #fbb872
		"--color-tertiary-500": "249 153 54", // #F99936
		"--color-tertiary-600": "224 138 49", // #e08a31
		"--color-tertiary-700": "187 115 41", // #bb7329
		"--color-tertiary-800": "149 92 32", // #955c20
		"--color-tertiary-900": "122 75 26", // #7a4b1a
		// success | #487605 
		"--color-success-50": "228 234 218", // #e4eada
		"--color-success-100": "218 228 205", // #dae4cd
		"--color-success-200": "209 221 193", // #d1ddc1
		"--color-success-300": "182 200 155", // #b6c89b
		"--color-success-400": "127 159 80", // #7f9f50
		"--color-success-500": "72 118 5", // #487605
		"--color-success-600": "65 106 5", // #416a05
		"--color-success-700": "54 89 4", // #365904
		"--color-success-800": "43 71 3", // #2b4703
		"--color-success-900": "35 58 2", // #233a02
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #760505 
		"--color-error-50": "234 218 218", // #eadada
		"--color-error-100": "228 205 205", // #e4cdcd
		"--color-error-200": "221 193 193", // #ddc1c1
		"--color-error-300": "200 155 155", // #c89b9b
		"--color-error-400": "159 80 80", // #9f5050
		"--color-error-500": "118 5 5", // #760505
		"--color-error-600": "106 5 5", // #6a0505
		"--color-error-700": "89 4 4", // #590404
		"--color-error-800": "71 3 3", // #470303
		"--color-error-900": "58 2 2", // #3a0202
		// surface | #0C0B0B 
		"--color-surface-50": "219 218 218", // #dbdada
		"--color-surface-100": "206 206 206", // #cecece
		"--color-surface-200": "194 194 194", // #c2c2c2
		"--color-surface-300": "158 157 157", // #9e9d9d
		"--color-surface-400": "85 84 84", // #555454
		"--color-surface-500": "12 11 11", // #0C0B0B
		"--color-surface-600": "11 10 10", // #0b0a0a
		"--color-surface-700": "9 8 8", // #090808
		"--color-surface-800": "7 7 7", // #070707
		"--color-surface-900": "6 5 5", // #060505
		
	}
}