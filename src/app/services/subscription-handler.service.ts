import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SubscriptionHandlerService {
	private subscriptionList: Subscription[] = [];

	constructor() {}

	public addSubscription(subscription: Subscription): void {
		this.subscriptionList.push(subscription);
	}

	public clearSubscriptions(): void {
		this.subscriptionList.forEach((subscription: Subscription) => subscription.unsubscribe());
	}
}
