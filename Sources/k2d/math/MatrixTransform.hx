package k2d.math;

import k2d.Entity;

class MatrixTransform {
    public var local:Matrix = Matrix.identity();
    public var world:Matrix = Matrix.identity();

    private var _cx:Float = 1;
	private var _sx:Float = 0;
	private var _cy:Float = 0;
	private var _sy:Float = 1;

	private var _aW:Float = 0;
	private var _aH:Float = 0;
	private var _pW:Float = 0;
	private var _pH:Float = 0;

	private var _scX:Float = 0;
	private var _scY:Float = 0;
	private var _anX:Float = 0;
	private var _anY:Float = 0;
	private var _piX:Float = 0;
	private var _piY:Float = 0;

	private var _midSizeX:Float = 0;
	private var _midSizeY:Float = 0;
    
    public function new(){}

    public inline function updateSkew(entity:Entity) : Void {
		_cx = Math.cos(entity.rotation + entity.skew.y);
		_sx = Math.sin(entity.rotation + entity.skew.y);
		_cy = -Math.sin(entity.rotation - entity.skew.x);
		_sy = Math.cos(entity.rotation - entity.skew.x);
	}

    public inline function updateLocal(entity:Entity) : Void {
		_scX = entity.scale.x * (entity.flip.x ? -1 : 1);
		_scY = entity.scale.y * (entity.flip.y ? -1 : 1);
		_anX = entity.flip.x ? 1-entity.anchor.x : entity.anchor.x;
		_anY = entity.flip.y ? 1-entity.anchor.y : entity.anchor.y;
		_piX = entity.flip.x ? 1-entity.pivot.x : entity.pivot.x;
		_piY = entity.flip.y ? 1-entity.pivot.y : entity.pivot.y;
		_midSizeX = entity.size.x*0.5;
		_midSizeY = entity.size.y*0.5;

		local._00 = _cx * _scX;
		local._01 = _sx * _scX;
		local._10 = _cy * _scY;
		local._11 = _sy * _scY;

		_aW = _anX * entity.size.x - _midSizeX;
		_aH = _anY * entity.size.y - _midSizeY;
		_pW = _piX * entity.size.x - _midSizeX;
		_pH = _piY * entity.size.y - _midSizeY;

		local._20 = entity.position.x - _aW * _scX + _pW * _scX;
		local._21 = entity.position.y - _aH * _scY + _pH * _scY;
		
		if(_pW != 0 || _pH != 0){
			local._20 -= _pW * local._00 + _pH * local._10;
			local._21 -= _pW * local._01 + _pH * local._11;
		}
	}

	public inline function updateWorld(pm:Matrix) : Void {
		world._00 = (local._00 * pm._00) + (local._01 * pm._10);
		world._01 = (local._00 * pm._01) + (local._01 * pm._11);
		world._10 = (local._10 * pm._00) + (local._11 * pm._10);
		world._11 = (local._10 * pm._01) + (local._11 * pm._11);

		world._20 = (local._20 * pm._00) + (local._21 * pm._10) + pm._20;
		world._21 = (local._20 * pm._01) + (local._21 * pm._11) + pm._21;
	}

    @:extern public inline function update(entity:Entity, parentMatrix:Matrix) : Void {
		updateLocal(entity);
		updateWorld(parentMatrix);
	}
}