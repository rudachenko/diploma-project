<template>
	<div class="col s12 m6 l8">
	  <div class="card grey lighten-4 bill-card">
	    <div class="card-content black-text">
	      <div class="card-header">
	        <span class="card-title">{{'ExchangeRates'|localize}}</span>
	      </div>
	      <table>
	        <thead>
	        <tr>
	          <th>{{'Currency'|localize}}</th>
	          <th>{{'Rate'|localize}}</th>
	          <th>{{'Date'|localize}}</th>
	        </tr>
	        </thead>

	        <tbody>
	        <tr>
	          <td>USD</td>
	          <td>{{(this.rates['UAH'] / this.rates['USD']).toFixed(3)}}</td>
	          <td>{{date | date('date')}}</td>
	        </tr>
	        <tr>
	          <td>EUR</td>
	          <td>{{this.rates['UAH'].toFixed(3)}}</td>
	          <td>{{date | date('date')}}</td>
	        </tr>
	        </tbody>
	      </table>
	    </div>
	  </div>
	</div>
</template>

<script>
	export default{
		props: ['rates', 'date']
	}
</script>