interface BadgeOptions {
	/**
	 * Font color for the badge
	 * @default 'auto'
	 */
	fontColor?: string;
	/**
	 * Font size and family for the badge
	 * @default '62px Microsoft Yahei'
	 */
	font?: string;
	color: string;
	/**
	 * Radius of the badge circle
	 * @default 48
	 */
	radius?: number;
	/**
	 * Channel name to listen for badge updates
	 * @default 'update-badge'
	 */
	updateBadgeEvent: string;
	/**
	 * Description for the badge for accessibility purposes
	 * @default 'New notification'
	 */
	badgeDescription?: string;
	/**
	 * Whether to listen for events from the renderer process
	 * @default true
	 */
	listenFromRenderer?: boolean;
	/**
	 * 'send' | 'handle'
	 * @default 'send'
	 */
	invokeType?: "send" | "handle";
	/**
	 * Maximum number to display on the badge
	 * @default 99
	 */
	max?: number;
	/**
	 * Whether the badge should fit the content
	 * @default false
	 */
	fit?: boolean;
	/**
	 * Whether to use the system accent color theme
	 * @default false
	 */
	useSystemAccentTheme?: boolean;
	/**
	 * Additional function to call when the badge is updated
	 */
	additionalFunc?: (count: number) => void;
}

/**
 * @example const badgeOptions = {
				fontColor: '#000000',
				font: '62px Microsoft Yahei',
				color: '#000000',
				radius: 48,
				updateBadgeEvent: 'notificationCount',
				badgeDescription: 'Unread Notifications',
				invokeType: 'handle',
				max: 9,
				fit: false,
				useSystemAccentTheme: true,
				additionalFunc: (count) => {
					console.log(`Received ${count} new notifications!`);
				},
			};

			new Badge(win, badgeOptions);
 * @since 1.0.0
 * @param { BrowserWindow } win
 * @param { object } opts
 * @returns { void }
*/

export default class Badge {
	constructor(win: object, opts: BadgeOptions);
	update(badgeCount: number): void;
	initListeners(): void;
}
