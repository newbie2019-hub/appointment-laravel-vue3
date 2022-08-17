<?php

namespace App\Extensions;

use LaravelDaily\Invoices\Invoice as FacadesInvoice;

class ExtendedInvoice extends FacadesInvoice
{
  
  public float $amount_tendered, $change;

   /**
     * @param $amount_tendered
     *
     * @return $this
     */
  public function amountReceived(float $amount_tendered)
  {
      $this->amount_tendered = $amount_tendered;
      return $this;
  }

  public function calculateChange($total_amount)
  {
    return $this->formatCurrency($this->amount_tendered - $total_amount);
  }

}
