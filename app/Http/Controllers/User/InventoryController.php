<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\InventoryRequest;
use App\Models\Inventory;
use Illuminate\Http\Request;
use Inertia\Inertia;


class InventoryController extends Controller
{
    public function index(Request $request)
    {
        $inventory = Inventory::when(
            $request->search,
            fn ($query)
            => $query->whereLike('equipment', $request->search)
                ->orWhereLike('remarks', $request->search)
        )->when(
            $request->trashed,
            fn ($query, $filter)
            => $filter === "only" ? $query->onlyTrashed() : $query->withTrashed()
        )->paginate(10)->withQueryString();

        $inventoryCount = Inventory::count();
        $trashedInventoryCount = Inventory::onlyTrashed()->count();
        /*
         *  Filter with Query String
         *  is needed to preserve
         *  search and paginate data
         */
        $filters = $request->only(['search', 'trashed']);
        return Inertia::render('Inventory', compact('inventoryCount', 'inventory', 'filters', 'trashedInventoryCount'));
    }

    public function store(InventoryRequest $request)
    {
        Inventory::create($request->validated());
        return back()->with('message', 'Equipment has been added successfully!');

    }

    public function update(Inventory $inventory, InventoryRequest $request)
    {
        $inventory->update($request->validated());
        return back()->with('message', 'Equipment has been updated successfully!');
    }

    public function destroy(Inventory $inventory)
    {
        $inventory->delete();
        return back()->with('message', 'Equipment has been moved to trash');
    }

    public function restore(Inventory $inventory)
    {
        $inventory->restore();
        return back()->with('success', 'Equipment has been restored successfully!');

    }
}
