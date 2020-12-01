<!-- 订单备注页面 -->
<template>
	<view class="container w-100 h-100 overflow-hidden">
		<view class="textarea">
			<textarea
			placeholder-class="text-color-assist font-size-base"
			v-model="remark"
			class="{'text-color-danger' : remarkLength > 50,"></textarea>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.container {
	padding: 30rpx 40rpx;

	.textarea {
		position: relative;

		.remark {
			border-radius: 8rpx;
			padding: 30rpx 40rpx;
			height: 320rpx;
			color: $font-size-base;
		}

		.tips {
			position: absolute;
			bottom: 30rpx;
			right: 40rpx;
		}
	}

	.quick-inputs {
		padding-right: 20rpx;

		.quick-input {
			background-color: #ffffff;
			border: 2rpx solid $color-primary;
			color: $color-primary;
			font-size: $font-size-base;
			padding: 16rpx 26rpx;
			margin-right: 20rpx;
			margin-bottom: 20rpx;
		}
	}

	.submit-btn {
		width: 90%;
		height: 80rpx;
		border-radius: 40rpx;
		line-height: 80rpx;
	}
}
</style>
