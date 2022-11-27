<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('addons_note')->nullable();
            $table->string('addons_amount')->nullable();
            $table->string('sub_total')->nullable();
            $table->string('total')->nullable();
            $table->string('amount_tendered')->nullable();
            $table->foreignId('appointment_id')->constrained()->cascadeOnDelete();
            $table->string('payment_type');
            $table->string('receipt_url');
            $table->boolean('is_installment');
            $table->string('change')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
};
